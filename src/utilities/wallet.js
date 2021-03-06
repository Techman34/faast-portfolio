import web3 from 'Services/Web3'
import Trezor from 'Services/Trezor'

export const closeTrezorWindow = () => Trezor && Trezor.close && Trezor.close()

export const isValidAddress = (address) => {
  return web3.utils.isAddress(address)
}
