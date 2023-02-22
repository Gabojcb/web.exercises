import Launcher from "./launcher";

export default class {
    #launchers: Map<string, Launcher> = new Map();

    get(id: string): Launcher {
        if (this.#launchers.has(id)) return this.#launchers.get(id);
        const launcher = new Launcher(id);
        this.#launchers.set(id, launcher);
        return launcher;
    }
}
