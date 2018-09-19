# digitalrms
cli for react module structure

# install : npm i -g digitalrms;

use: digitalrms name -e js -s css -r ;


# params:

# -alias  --fullname<required> [optional]  'discription'  'default'

'-e, --ext <type>', 'extention of file', 'js';

'-s, --ss [type]', 'include stylesheet';

'-r, --redux [val]', 'include redux structure', false;

# Structure:

|-Main.ext(js)
|- Main.ext(css) [if included]
|- reducers [if included]
  |- index.js
|- action.js
|- i18n
  |- en.js
  |- sv.js
|- utils.js
