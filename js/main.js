import {getPictures} from "./data.js";
import { generateThumbnails } from "./thumbnail.js";
getPictures ();
generateThumbnails(getPictures());
