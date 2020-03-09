import { getJSON, getFilePath } from '../helper';
import uuid from 'uuid/v4';
exports.example = async (ctx, next) => {
  ctx.body = getJSON('example')
  return next;
}
