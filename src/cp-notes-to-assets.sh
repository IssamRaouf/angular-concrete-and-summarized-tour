#!/bin/bash

rsync -armR --include="*/" --include="*.md" --exclude="*" ./app/ ./assets/md
