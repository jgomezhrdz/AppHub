import { Command } from "./command";

export interface ComandoDeshacer extends Command {

    deshacer(): void
    rehacer(): void
}
