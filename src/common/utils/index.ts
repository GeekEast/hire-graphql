import plural from 'pluralize';
import { lowerCase } from 'lodash';

export const getResourcesPath = (cls: string) => plural(lowerCase(cls));
