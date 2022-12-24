import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

export const createStyleSheet = (styles: any) => jss.createStyleSheet(styles).attach();