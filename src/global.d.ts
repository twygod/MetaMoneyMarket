declare module 'truffle-contract';
declare module '@rebass/forms';
declare module '@walletconnect/web3-subprovider';

declare type BN = import('bn.js');

declare interface ITokenAmount {
  amount: BN;
  decimals: number;
  format: (precision?: number) => string;
}

declare interface Market {
  address: string;
  symbol: string;
  interestRate: number;
  price: number;
  depositBalance?: ITokenAmount;
  walletBalance?: ITokenAmount;
}

declare type Markets = Market[];

declare type Maybe<T> = T | null;
