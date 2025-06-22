#!/bin/bash
# Dependancies
# - img-optimize - https://virtubox.github.io/img-optimize/
# - imagemagick
# - jpegoptim
# - optipng

FOLDER="/home/hoshiya4522/Stuff/mte23/images-optimized"


# max width
WIDTH=600

# max height
HEIGHT=600

#resize png or jpg to either height or width, keeps proportions using imagemagick
find ${FOLDER} -iname '*.webp' -o -iname '*.webp' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;
img-optimize --std --path ${FOLDER}

