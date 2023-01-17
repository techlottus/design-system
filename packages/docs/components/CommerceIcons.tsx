import {
  CartIcon,
  MoneyIcon,
  PaymentCardIcon,
  PaymentPartialIcon,
  LendingIcon,
  StoreIcon,
} from "@exponentialeducation/iconography/icons/esm/index";

const CommerceIcons = () => {
  return (
    <div className="my-10 grid grid-cols-6 gap-10">
      <div className="flex flex-col items-center space-y-2">
        <CartIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">CartIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <MoneyIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">MoneyIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <PaymentCardIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">PaymentCardIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <PaymentPartialIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">PaymentPartialIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <LendingIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">LendingIcon</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <StoreIcon className="w-8 h-8" />
        <span className="text-xs text-gray-600">StoreIcon</span>
      </div>
    </div>
  )
}

export default CommerceIcons;
