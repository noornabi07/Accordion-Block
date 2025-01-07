const iconColor = '#4527a4';

export const accordionIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 600 600'>
	<g transform='translate(0.000000,600.000000) scale(0.100000,-0.100000)' fill={iconColor}>
		<path d='M2830 5994 c-368 -31 -646 -93 -934 -206 -759 -299 -1385 -925 -1684 -1684 -89 -227 -155 -484 -188 -741 -23 -175 -23 -551 0 -726 83 -635 347 -1208 765 -1660 494 -535 1120 -858 1848 -953 175 -23 551 -23 726 0 728 95 1354 418 1848 953 418 452 682 1025 765 1660 23 175 23 551 0 726 -71 543 -261 1013 -583 1440 -488 650 -1216 1071 -2024 1172 -121 15 -450 27 -539 19z m2005 -1221 c48 -26 116 -94 141 -143 18 -34 19 -95 19 -1630 0 -1535 -1 -1596 -19 -1630 -25 -49 -93 -117 -141 -143 l-40 -22 -1695 0 c-1633 0 -1696 1 -1730 19 -49 25 -117 93 -143 141 l-22 40 0 1595 c0 1535 1 1596 19 1630 37 71 117 140 186 161 14 4 781 7 1705 6 l1680 -2 40 -22z' />
		<path d='M1462 4585 c-58 -25 -62 -48 -62 -385 l0 -300 1700 0 1700 0 0 300 c0 340 -3 360 -64 385 -52 22 -3224 22 -3274 0z m300 -202 l88 -88 90 90 90 90 72 -73 73 -72 -163 -162 -162 -163 -162 162 -163 163 70 70 c38 38 72 70 75 70 2 0 44 -39 92 -87z' />
		<path d='M1400 3000 l0 -700 1700 0 1700 0 0 700 0 700 -1700 0 -1700 0 0 -700z m615 380 l160 -160 -73 -72 -72 -73 -90 90 -90 90 -90 -90 -90 -90 -72 73 -73 72 160 160 c88 88 162 160 165 160 3 0 77 -72 165 -160z' />
		<path d='M1400 1800 c0 -340 3 -360 64 -385 53 -22 3219 -22 3272 0 61 25 64 45 64 385 l0 300 -1700 0 -1700 0 0 -300z m362 83 l88 -88 90 90 90 90 72 -73 73 -72 -163 -162 -162 -163 -162 162 -163 163 70 70 c38 38 72 70 75 70 2 0 44 -39 92 -87z' />
	</g>
</svg>

export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>

export function BsPlus(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1.5em" width="1.5em" {...props}><path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" /><path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd" /></svg>;
}

export function BiMinus(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1.5em" width="1.5em" {...props}><path d="M5 11H19V13H5z" /></svg>;
}

// Right Arrow First
export function IoIosArrowForward(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1.5em" width="1.5em" {...props}><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" /></svg>;
  }
  
  // Down Arrow First
  export function IoIosArrowDown(props) {
	return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1.5em" width="1.5em" {...props}><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" /></svg>;
  }