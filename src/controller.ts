import { EchoReadyEvent } from './events/ready';

export class EchoController {
    start() {
        // connect to twitch
        // dispatch event that its ready to load
        window.dispatchEvent(EchoReadyEvent);
    }
}
