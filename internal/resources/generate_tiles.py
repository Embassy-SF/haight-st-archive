#!/usr/bin/env python3

import json
from typing import List, Dict
import argparse
from pathlib import Path


class TileGenerator:
    def __init__(self, dashboard_path: str = "internal/resources/dashboard.json"):
        self.dashboard_path = dashboard_path

    def load_dashboard(self) -> Dict:
        """Load the dashboard data from JSON."""
        with open(self.dashboard_path, "r") as f:
            return json.load(f)

    def filter_entries_by_tags(
        self, entries: List[Dict], tags: List[str]
    ) -> List[Dict]:
        """Filter entries that contain ALL specified tags."""
        return [
            entry
            for entry in entries
            if all(tag in entry.get("tags", []) for tag in tags)
        ]

    def generate_tile_html(self, entry: Dict) -> str:
        """Generate HTML for a single project tile."""
        title = entry.get("title", "Untitled Project")
        description = entry.get("description", "No description available")
        url = entry.get("url", "#")
        banner = entry.get("banner")
        entry_id = entry.get("entryID", "00000")

        bg_style = f"background-image: url('{banner}')" if banner else ""

        return f"""<div class="project-tile" data-entry-id="{entry_id}">
    <a href="{url}" target="_blank" rel="noopener noreferrer">
        <div class="project-tile-bg" style="{bg_style}"></div>
        <div class="project-tile-title">{title}</div>
        <div class="project-tile-description">{description}</div>
    </a>
</div>"""

    def generate_grid_html(self, tags: List[str]) -> str:
        """Generate HTML for a grid of project tiles filtered by tags."""
        dashboard = self.load_dashboard()
        filtered_entries = self.filter_entries_by_tags(dashboard["projects"], tags)

        tiles_html = "\n".join(
            self.generate_tile_html(entry) for entry in filtered_entries
        )

        return f"""<div class="project-grid">
{tiles_html}
</div>"""


def main():
    parser = argparse.ArgumentParser(
        description="Generate HTML tiles from dashboard data"
    )
    parser.add_argument("--tags", nargs="+", required=True, help="Tags to filter by")
    parser.add_argument(
        "--output",
        default="internal/resources/resource-output.md",
        help="Output file path (optional)",
    )

    args = parser.parse_args()

    generator = TileGenerator()
    html = generator.generate_grid_html(args.tags)

    if args.output:
        # If output file exists, read it and replace content between markers
        if Path(args.output).exists():
            with open(args.output, "r") as f:
                content = f.read()
                start = content.find("<!-- BEGIN GFEL TILES -->")
                end = content.find("<!-- END GFEL TILES -->")
                if start != -1 and end != -1:
                    new_content = (
                        content[: start + len("<!-- BEGIN GFEL TILES -->\n")]
                        + html
                        + "\n"
                        + content[end:]
                    )
                    with open(args.output, "w") as f:
                        f.write(new_content)
                    return

        # If file doesn't exist or no markers found, write directly
        with open(args.output, "w") as f:
            f.write(html)
    else:
        print(html)


if __name__ == "__main__":
    main()
