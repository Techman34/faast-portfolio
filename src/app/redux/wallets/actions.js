import { createAction } from 'redux-act'

import walletService from 'Services/Wallet'

export const walletAdded = createAction('WALLET_ADDED', (wallet) => ({
  id: wallet.getId(),
  type: wallet.type,
  address: wallet.getAddress ? wallet.getAddress() : null,
  isBlockstack: wallet.isBlockstack,
}))
export const walletRemoved = createAction('WALLET_REMOVED', (wallet) => ({ id: wallet.getId() }))
export const allWalletsRemoved = createAction('ALL_WALLETS_REMOVED')

export const walletBalancesUpdated = createAction('WALLET_BALANCES_UPDATED', (walletId, balancesByAsset) => ({
  id: walletId,
  balances: balancesByAsset
}))

export const addWallet = (wallet) => (dispatch) => Promise.resolve()
  .then(() => walletService.save(wallet))
  .then(() => dispatch(walletAdded(wallet)))

export const removeWallet = (walletId) => (dispatch) => Promise.resolve()
  .then(() => walletService.remove(walletId))
  .then(() => dispatch(walletRemoved({ id: walletId })))

export const removeAllWallets = () => (dispatch) => Promise.resolve()
  .then(() => walletService.removeAll())
  .then(() => dispatch(allWalletsRemoved()))

export const restoreAllWallets = () => (dispatch) => Promise.resolve()
  .then(() => walletService.restoreAllWallets())
  .then((restoredWallets) => restoredWallets.forEach((w) => dispatch(walletAdded(w))))