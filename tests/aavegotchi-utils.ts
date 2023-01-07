import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  LendingOperatorSet,
  ERC721ExecutedListing
} from "../generated/Aavegotchi/Aavegotchi"

export function createLendingOperatorSetEvent(
  lender: Address,
  lendingOperator: Address,
  tokenId: BigInt,
  isLendingOperator: boolean
): LendingOperatorSet {
  let lendingOperatorSetEvent = changetype<LendingOperatorSet>(newMockEvent())

  lendingOperatorSetEvent.parameters = new Array()

  lendingOperatorSetEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  lendingOperatorSetEvent.parameters.push(
    new ethereum.EventParam(
      "lendingOperator",
      ethereum.Value.fromAddress(lendingOperator)
    )
  )
  lendingOperatorSetEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  lendingOperatorSetEvent.parameters.push(
    new ethereum.EventParam(
      "isLendingOperator",
      ethereum.Value.fromBoolean(isLendingOperator)
    )
  )

  return lendingOperatorSetEvent
}

export function createERC721ExecutedListingEvent(
  listingId: BigInt,
  seller: Address,
  buyer: Address,
  erc721TokenAddress: Address,
  erc721TokenId: BigInt,
  category: BigInt,
  priceInWei: BigInt,
  time: BigInt
): ERC721ExecutedListing {
  let erc721ExecutedListingEvent = changetype<ERC721ExecutedListing>(
    newMockEvent()
  )

  erc721ExecutedListingEvent.parameters = new Array()

  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam(
      "erc721TokenAddress",
      ethereum.Value.fromAddress(erc721TokenAddress)
    )
  )
  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam(
      "erc721TokenId",
      ethereum.Value.fromUnsignedBigInt(erc721TokenId)
    )
  )
  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam(
      "category",
      ethereum.Value.fromUnsignedBigInt(category)
    )
  )
  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam(
      "priceInWei",
      ethereum.Value.fromUnsignedBigInt(priceInWei)
    )
  )
  erc721ExecutedListingEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return erc721ExecutedListingEvent
}
