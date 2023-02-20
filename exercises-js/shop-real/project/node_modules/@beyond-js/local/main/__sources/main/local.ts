import HMR from './hmr';
import Application from './application';
import Launchers from './launchers';
import {backends} from '@beyond-js/backend/client';

export /*bundle*/ const local = new class BeyondLocal {
    #launchers: Launchers;
    get launchers() {
        return this.#launchers;
    }

    /**
     * Application styles and global styles hot code replacement
     * @private
     */
    #application: Application;
    get application() {
        return this.#application;
    }

    #hmr: HMR;
    get hmr() {
        return this.#hmr;
    }

    #registered;

    /**
     * Register the inspection port of the engine to start running HMR
     *
     * @param {number} inspect
     * @param {number} devServer?
     */
    register(inspect: number, devServer: number) {
        if (this.#registered) throw new Error('@beyond-js/local .register method call should be called only once');
        this.#registered = true;

        backends.register('@beyond-js/local', `http://localhost:${inspect}`);
        this.#launchers = new Launchers();
        this.#hmr = new HMR(devServer);
        this.#application = new Application();
    }
}
