import { IOClients } from '@vtex/api'

import Hubly from './hubly'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get hubly() {
    return this.getOrSet('hubly', Hubly)
  }
}
