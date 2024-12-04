import { GITHUB_LINK, ONCHAINKIT_LINK } from 'src/links';
import { ExternalLinkSvg } from 'src/svg/ExternalLinkSvg';

export default function OnchainStoreSummary() {
  return (
    <div className='flex flex-col justify-center border-gray-200 border-b p-4 py-8 pb-22 md:w-1/3 md:border-r md:border-b-0 md:py-4 lg:border-r lg:p-6 lg:pb-22'>
      <div className='space-y-4 text-left'>
        <h2
          className='font-bold text-3xl leading-tight'
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontStretch: 'condensed',
          }}
        >
          A Taste of Purity, Powered by the Blockchain{' '}
        </h2>
        <p className='text-sm leading-relaxed'>
          Discover the natural luxury of Manuka honey, now with the innovation
          of onchain payments. Say goodbye to high fees and delays—savor
          simplicity, speed, and sweetness in every transaction. Experience a
          smoother way to shop, where premium honey meets premium technology.
        </p>
      </div>
    </div>
  );
}
