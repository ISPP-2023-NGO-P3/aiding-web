import tw from "twin.macro";
export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
export const PrimaryButtonDisabled = tw.button`bg-primary-500 text-gray-100 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`;