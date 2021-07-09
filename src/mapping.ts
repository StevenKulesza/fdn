import { ENS, SetENSName } from "../generated/ENS/ENS"
import { SetENSName as setName } from "../generated/schema"

export function handleSetENSName(event: SetENSName): void {
  let id = event.address.toHexString().concat('-').concat(event.params.name.toString())
  let entity = new setName(id)
  entity.name = event.params.name
  entity.save()
}
