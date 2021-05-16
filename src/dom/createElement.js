import { NAMESPACE } from "../constants";

export default function createElement(type) {
  return document.createElementNS(NAMESPACE, type);
}
