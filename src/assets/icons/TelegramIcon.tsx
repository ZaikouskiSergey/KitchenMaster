import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={34}
    ref={ref}
    viewBox={'0 0 40 34'}
    width={40}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M36.7527 0.38643L1.31463 14.2583C-0.111463 14.9043 -0.593806 16.1979 0.969943 16.9L10.0613 19.8328L32.0432 6.04268C33.2434 5.17696 34.4722 5.4078 33.4148 6.36015L14.5354 23.712L13.9424 31.0553C14.4917 32.1891 15.4974 32.1944 16.139 31.6308L21.3623 26.6139L30.308 33.4137C32.3857 34.6623 33.5163 33.8565 33.9633 31.568L39.8309 3.36528C40.4401 0.548323 39.4012 -0.692859 36.7527 0.38643Z'
      }
      fill={'white'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as TelegramIcon }
