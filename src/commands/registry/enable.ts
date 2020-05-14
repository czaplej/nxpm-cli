import { Command } from '@oclif/command'
import { enableRegistry } from '../../lib/verdaccio'

export default class RegistryEnable extends Command {
  static description = 'Configure yarn and npm to use local npm registry'

  async run() {
    enableRegistry()
  }
}
