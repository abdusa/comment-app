import { SAVE_COMMENT } from './types';

// Action creators example
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  }
}