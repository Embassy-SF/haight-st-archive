# GFEL Resource Indexing Guide

This document describes the pipeline for managing and displaying resource tiles across the GFEL digital garden.

## Overview

The resource indexing system allows for dynamic display of curated resources across any page in the digital garden. The system consists of three main components:

1. **URL Processing** (`url_processor.py`)

   - Reads URLs from `resource-input.md`
   - Processes each URL to extract metadata (title, description, banner image)
   - Stores entries in `dashboard.json`
   - Preserves existing entries and tags
   - Only processes new URLs not already in the dashboard

2. **Dashboard Storage** (`dashboard.json`)

   - Central storage for all resource metadata
   - Each entry contains:
     - `entryID`: Unique identifier
     - `url`: Resource URL
     - `title`: Resource title
     - `description`: Resource description
     - `banner`: Banner image URL
     - `tags`: Array of freeform tags
     - `status`: Resource status

3. **Dynamic Display** (`resource-tiles.js`)
   - Monitors `dashboard.json` for updates
   - Automatically updates tile elements across the site
   - Updates every 30 seconds

## Usage

### Adding New Resources

1. Add URLs to `resource-input.md`, one per line
2. Run the URL processor:
   ```bash
   python3 url_processor.py
   ```

### Displaying Resources

To display a resource tile in any markdown file:

```html
<div class="project-tile" data-entry-id="00001"></div>
```

Replace `00001` with the desired entry ID from `dashboard.json`.

### Tagging Resources

Tags are managed manually in `dashboard.json`. Each resource can have multiple freeform tags in its `tags` array.

### Styling

Resource tiles are styled by `custom.scss` with:

- Responsive grid layout
- Hover effects
- Banner images
- Title and description overlays

## File Locations

- `/internal/resources/`
  - `resource-input.md` - Input URLs
  - `dashboard.json` - Resource metadata
  - `url_processor.py` - URL processing script
  - `static/js/resource-tiles.js` - Dynamic update script
- `/quartz/styles/custom.scss` - Tile styling

## Development Notes

- The system is designed to be non-destructive - existing entries and tags are preserved
- Resource tiles can be placed anywhere in the digital garden
- Updates are automatic - no need to rebuild pages when dashboard changes
