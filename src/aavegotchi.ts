import { store } from "@graphprotocol/graph-ts"
import {
  LendingOperatorSet,
} from "../generated/Aavegotchi/Aavegotchi"
import { GotchiOperator } from "../generated/schema"

/**
 * 
 * @param event 
 */
export function handleLendingOperatorSet(event: LendingOperatorSet): void {
  // Build the id based on the gotchi id and the owner address.
  const id = event.params.lendingOperator.toHexString()+"_"+event.params.lender.toHexString()+"_"+event.params.tokenId.toString()
  // Check if operator was enabled or disabled
  if (event.params.isLendingOperator) {
      let gotchiOperator = new GotchiOperator(id)
      gotchiOperator.gotchiId = event.params.tokenId
      gotchiOperator.operator = event.params.lendingOperator
      gotchiOperator.owner = event.params.lender
      gotchiOperator.save()
  } else {
    let gotchiOperator = GotchiOperator.load(id)
    // if disabled we find and delete the operator in the array
    if (gotchiOperator) {
      store.remove('GotchiOperator', id)
    }
  }
}