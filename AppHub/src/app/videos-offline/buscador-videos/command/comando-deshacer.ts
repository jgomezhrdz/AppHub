import { Video } from "../../video";
import { Command } from "./command";

export interface ComandoDeshacer extends Command {

    deshacer(): void
    rehacer(): void
    getVideo(): Video
    setVideo(video: Video): void
}
