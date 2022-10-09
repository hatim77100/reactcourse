// import car from "./car.svg";

const Car = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="400"
      zoomAndPan="magnify"
      viewBox="0 0 384 383.999986"
      height={props.height}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <clipPath id="82fe23d0dd">
          <path
            d="M 11 245 L 73 245 L 73 320.660156 L 11 320.660156 Z M 11 245 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4b6506b117">
          <path
            d="M 311 245 L 373 245 L 373 320.660156 L 311 320.660156 Z M 311 245 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="40ad16f629">
          <path
            d="M 3.691406 63.410156 L 380.191406 63.410156 L 380.191406 284 L 3.691406 284 Z M 3.691406 63.410156 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#82fe23d0dd)">
        <path
          fill={props.color}
          d="M 57.804688 320.570312 L 25.925781 320.570312 C 18.046875 320.570312 11.660156 314.179688 11.660156 306.296875 L 11.660156 259.351562 C 11.660156 251.46875 18.046875 245.078125 25.925781 245.078125 L 57.835938 245.078125 C 65.710938 245.078125 72.097656 251.46875 72.097656 259.351562 L 72.097656 306.296875 C 72.097656 314.179688 65.679688 320.570312 57.804688 320.570312 Z M 57.804688 320.570312 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#4b6506b117)">
        <path
          fill={props.color}
          d="M 357.925781 320.570312 L 326.015625 320.570312 C 318.136719 320.570312 311.75 314.179688 311.75 306.296875 L 311.75 259.351562 C 311.75 251.46875 318.136719 245.078125 326.015625 245.078125 L 357.925781 245.078125 C 365.800781 245.078125 372.1875 251.46875 372.1875 259.351562 L 372.1875 306.296875 C 372.21875 314.179688 365.832031 320.570312 357.925781 320.570312 Z M 357.925781 320.570312 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#40ad16f629)">
        <path
          fill={props.color}
          d="M 380.191406 245.355469 C 380.191406 245.699219 380.191406 246.039062 380.191406 246.382812 C 380.191406 246.878906 380.191406 247.34375 380.160156 247.839844 C 379.632812 273.53125 369.894531 283.617188 356.125 283.769531 C 356 283.769531 355.910156 283.769531 355.785156 283.769531 L 28.03125 283.769531 C 27.941406 283.769531 27.847656 283.769531 27.753906 283.769531 C 13.953125 283.648438 4.246094 273.5625 3.71875 247.839844 C 3.71875 247.34375 3.691406 246.878906 3.691406 246.382812 C 3.691406 246.039062 3.691406 245.699219 3.691406 245.355469 L 5.519531 200.085938 C 5.519531 199.992188 5.519531 199.929688 5.550781 199.835938 C 5.550781 199.714844 5.582031 199.621094 5.582031 199.496094 C 5.613281 199.25 5.613281 199 5.644531 198.75 C 5.675781 198.566406 5.675781 198.347656 5.707031 198.164062 C 5.738281 197.945312 5.765625 197.726562 5.796875 197.511719 C 5.828125 197.292969 5.859375 197.078125 5.890625 196.890625 C 5.921875 196.671875 5.953125 196.457031 5.984375 196.238281 C 6.015625 196.019531 6.046875 195.804688 6.109375 195.585938 C 6.234375 194.902344 6.355469 194.222656 6.511719 193.539062 C 6.636719 192.949219 6.757812 192.390625 6.914062 191.832031 C 6.976562 191.617188 7.039062 191.398438 7.070312 191.179688 C 7.195312 190.777344 7.285156 190.34375 7.410156 189.941406 C 7.535156 189.535156 7.628906 189.164062 7.78125 188.761719 C 7.84375 188.574219 7.9375 188.328125 8.0625 188.015625 C 8.558594 186.867188 9.582031 184.914062 11.441406 182.585938 C 11.84375 182.121094 12.28125 181.625 12.746094 181.097656 C 20.960938 171.882812 41.492188 150.222656 48.34375 143.023438 C 49.863281 141.441406 51.136719 139.640625 52.191406 137.6875 C 52.191406 137.6875 52.191406 137.65625 52.191406 137.65625 L 56.964844 128.71875 L 65.371094 113.019531 L 69.523438 105.261719 L 71.570312 101.414062 L 77.710938 89.933594 L 83.757812 78.609375 C 83.976562 78.207031 84.191406 77.832031 84.441406 77.429688 C 84.535156 77.304688 84.597656 77.179688 84.6875 77.058594 C 84.8125 76.839844 84.96875 76.652344 85.09375 76.46875 C 85.246094 76.28125 85.371094 76.0625 85.527344 75.878906 C 86.117188 75.101562 86.796875 74.359375 87.511719 73.675781 C 91.730469 69.609375 97.867188 66.941406 104.535156 66.476562 C 107.078125 66.289062 109.621094 66.136719 112.195312 65.980469 C 114.582031 65.824219 116.972656 65.699219 119.421875 65.546875 C 121.097656 65.453125 122.769531 65.359375 124.445312 65.265625 C 126.152344 65.171875 127.855469 65.078125 129.5625 65.019531 C 130.710938 64.957031 131.855469 64.894531 133.003906 64.863281 C 140.664062 64.519531 148.445312 64.210938 156.417969 63.992188 C 165.101562 63.746094 173.96875 63.589844 182.992188 63.527344 C 183.582031 63.527344 184.203125 63.527344 184.792969 63.527344 C 187.210938 63.527344 189.628906 63.496094 192.046875 63.496094 C 193.257812 63.496094 194.4375 63.496094 195.613281 63.496094 C 196.730469 63.496094 197.847656 63.496094 198.964844 63.496094 C 199.554688 63.496094 200.140625 63.496094 200.761719 63.496094 C 209.816406 63.558594 218.6875 63.714844 227.398438 63.964844 C 228.082031 63.992188 228.734375 63.992188 229.414062 64.023438 L 229.476562 64.023438 C 236.984375 64.242188 244.332031 64.519531 251.558594 64.863281 C 253.726562 64.957031 255.867188 65.078125 258.039062 65.171875 L 258.070312 65.171875 C 260.210938 65.296875 262.316406 65.390625 264.425781 65.515625 C 266.847656 65.667969 269.265625 65.792969 271.652344 65.949219 C 274.226562 66.105469 276.769531 66.289062 279.3125 66.445312 C 285.980469 66.878906 292.121094 69.578125 296.335938 73.644531 C 297.050781 74.328125 297.730469 75.070312 298.320312 75.847656 C 298.476562 76.03125 298.632812 76.25 298.753906 76.4375 C 298.878906 76.621094 299.035156 76.839844 299.160156 77.027344 C 299.25 77.148438 299.3125 77.273438 299.40625 77.398438 C 299.65625 77.769531 299.871094 78.175781 300.089844 78.578125 L 306.136719 89.902344 L 312.277344 101.382812 L 314.324219 105.230469 L 318.476562 112.988281 L 326.882812 128.6875 L 331.65625 137.625 C 331.65625 137.625 331.65625 137.65625 331.6875 137.65625 C 332.742188 139.609375 334.015625 141.410156 335.535156 142.992188 C 342.386719 150.191406 362.949219 171.851562 371.132812 181.066406 C 371.601562 181.59375 372.035156 182.089844 372.4375 182.554688 C 374.296875 184.882812 375.320312 186.835938 375.816406 187.984375 C 375.941406 188.296875 376.035156 188.542969 376.097656 188.730469 C 376.21875 189.132812 376.34375 189.503906 376.4375 189.910156 C 376.5625 190.3125 376.683594 190.746094 376.777344 191.148438 C 376.839844 191.367188 376.902344 191.585938 376.933594 191.800781 C 377.058594 192.359375 377.210938 192.949219 377.335938 193.507812 C 377.492188 194.191406 377.617188 194.875 377.738281 195.554688 C 377.769531 195.773438 377.800781 195.992188 377.832031 196.207031 C 377.863281 196.425781 377.894531 196.640625 377.925781 196.859375 C 377.957031 197.078125 377.988281 197.292969 378.019531 197.480469 C 378.050781 197.695312 378.082031 197.914062 378.113281 198.132812 C 378.144531 198.316406 378.144531 198.535156 378.175781 198.722656 C 378.203125 198.96875 378.234375 199.21875 378.234375 199.464844 C 378.234375 199.589844 378.234375 199.683594 378.265625 199.808594 C 378.265625 199.898438 378.265625 199.960938 378.296875 200.054688 Z M 380.191406 245.355469 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <path
        fill="#ffffff"
        d="M 287.5 194.5625 L 285.980469 193.476562 C 286.132812 193.257812 286.289062 193.042969 286.445312 192.792969 C 287.683594 191.027344 290.632812 186.589844 294.074219 181.40625 C 298.847656 174.207031 304.832031 165.242188 309.019531 159.128906 L 310.539062 160.183594 C 306.320312 166.296875 300.367188 175.230469 295.59375 182.429688 C 292.152344 187.582031 289.171875 192.050781 287.964844 193.847656 C 287.808594 194.128906 287.621094 194.375 287.5 194.5625 Z M 287.5 194.5625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 96.347656 194.5625 L 96.289062 194.4375 C 96.164062 194.253906 96.039062 194.066406 95.882812 193.878906 C 94.675781 192.144531 91.730469 187.707031 88.316406 182.554688 C 83.511719 175.324219 77.527344 166.328125 73.308594 160.214844 L 74.828125 159.160156 C 79.046875 165.304688 85.03125 174.300781 89.867188 181.53125 C 93.277344 186.652344 96.226562 191.085938 97.433594 192.824219 C 97.558594 193.011719 97.714844 193.199219 97.808594 193.382812 L 97.898438 193.507812 Z M 96.347656 194.5625 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 288.492188 229.75 C 288.585938 229.875 288.675781 230.027344 288.800781 230.152344 C 291.128906 232.945312 295.097656 233.007812 298.570312 232.882812 C 313.082031 232.292969 327.59375 231.734375 342.109375 231.144531 C 344.433594 231.054688 346.882812 230.929688 348.898438 229.625 C 351.351562 228.011719 352.621094 225.003906 353.738281 222.179688 C 356.960938 213.957031 360.28125 205.269531 359.226562 196.425781 C 358.976562 194.316406 358.421875 192.113281 357.085938 190.527344 C 354.328125 187.238281 349.488281 187.582031 345.425781 188.417969 C 329.640625 191.707031 313.394531 198.503906 299.160156 206.476562 C 295.996094 208.246094 292.800781 210.203125 290.382812 213.054688 C 287.097656 216.839844 285.265625 225.28125 288.492188 229.75 Z M 288.492188 229.75 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 95.355469 229.75 C 95.265625 229.875 95.171875 230.027344 95.046875 230.152344 C 92.722656 232.945312 88.75 233.007812 85.277344 232.882812 C 70.765625 232.292969 56.253906 231.734375 41.738281 231.144531 C 39.414062 231.054688 36.964844 230.929688 34.949219 229.625 C 32.5 228.011719 31.226562 225.003906 30.109375 222.179688 C 26.886719 213.957031 23.566406 205.269531 24.621094 196.425781 C 24.871094 194.316406 25.429688 192.113281 26.761719 190.527344 C 29.519531 187.238281 34.359375 187.582031 38.421875 188.417969 C 54.207031 191.707031 70.457031 198.503906 84.6875 206.476562 C 87.851562 208.246094 91.046875 210.203125 93.464844 213.054688 C 96.753906 216.839844 98.582031 225.28125 95.355469 229.75 Z M 95.355469 229.75 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 256.550781 237.785156 L 127.296875 237.785156 C 124.601562 237.785156 122.210938 236.046875 121.375 233.503906 L 113.714844 210.171875 C 112.382812 206.136719 115.390625 201.980469 119.636719 201.980469 L 264.242188 201.980469 C 268.488281 201.980469 271.496094 206.136719 270.164062 210.171875 L 262.503906 233.503906 C 261.636719 236.046875 259.25 237.785156 256.550781 237.785156 Z M 256.550781 237.785156 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 347.164062 268.070312 L 331.875 268.070312 C 329.765625 268.070312 328.0625 266.363281 328.0625 264.253906 L 328.0625 257.394531 C 328.0625 255.285156 329.765625 253.578125 331.875 253.578125 L 347.164062 253.578125 C 349.273438 253.578125 350.976562 255.285156 350.976562 257.394531 L 350.976562 264.253906 C 350.976562 266.363281 349.273438 268.070312 347.164062 268.070312 Z M 347.164062 268.070312 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 318.011719 268.070312 L 285.359375 268.070312 C 283.25 268.070312 281.542969 266.363281 281.542969 264.253906 L 281.542969 257.394531 C 281.542969 255.285156 283.25 253.578125 285.359375 253.578125 L 318.011719 253.578125 C 320.121094 253.578125 321.828125 255.285156 321.828125 257.394531 L 321.828125 264.253906 C 321.828125 266.363281 320.121094 268.070312 318.011719 268.070312 Z M 318.011719 268.070312 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 36.683594 268.070312 L 51.972656 268.070312 C 54.082031 268.070312 55.789062 266.363281 55.789062 264.253906 L 55.789062 257.394531 C 55.789062 255.285156 54.082031 253.578125 51.972656 253.578125 L 36.683594 253.578125 C 34.578125 253.578125 32.871094 255.285156 32.871094 257.394531 L 32.871094 264.253906 C 32.871094 266.363281 34.578125 268.070312 36.683594 268.070312 Z M 36.683594 268.070312 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 65.835938 268.070312 L 98.488281 268.070312 C 100.597656 268.070312 102.304688 266.363281 102.304688 264.253906 L 102.304688 257.394531 C 102.304688 255.285156 100.597656 253.578125 98.488281 253.578125 L 65.835938 253.578125 C 63.726562 253.578125 62.019531 255.285156 62.019531 257.394531 L 62.019531 264.253906 C 62.019531 266.363281 63.726562 268.070312 65.835938 268.070312 Z M 65.835938 268.070312 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 324.03125 143.054688 L 59.820312 143.054688 C 59.941406 142.839844 60.066406 142.621094 60.191406 142.402344 L 60.5 141.90625 L 60.625 141.597656 L 73.554688 117.425781 L 77.710938 109.667969 L 79.757812 105.820312 L 85.898438 94.339844 L 91.945312 83.046875 C 92.070312 82.796875 92.195312 82.609375 92.285156 82.457031 C 92.316406 82.394531 92.347656 82.332031 92.378906 82.300781 L 92.441406 82.207031 C 92.503906 82.113281 92.566406 82.023438 92.628906 81.960938 C 92.691406 81.867188 92.78125 81.742188 92.875 81.648438 C 93.21875 81.214844 93.589844 80.8125 93.960938 80.4375 C 96.722656 77.800781 100.816406 76.125 105.1875 75.816406 C 108.101562 75.628906 110.550781 75.472656 112.785156 75.320312 C 115.171875 75.164062 117.5625 75.039062 119.949219 74.886719 C 121.59375 74.792969 123.265625 74.699219 124.941406 74.605469 C 126.617188 74.511719 128.320312 74.417969 130.027344 74.359375 C 131.175781 74.296875 132.289062 74.265625 133.4375 74.203125 C 141.097656 73.859375 148.914062 73.550781 156.664062 73.332031 C 165.503906 73.085938 174.371094 72.929688 183.054688 72.867188 L 183.085938 72.867188 C 183.644531 72.867188 184.203125 72.867188 184.761719 72.867188 L 184.824219 72.867188 C 187.210938 72.867188 189.628906 72.835938 192.046875 72.835938 C 193.226562 72.835938 194.4375 72.835938 195.613281 72.835938 L 195.707031 72.835938 C 196.761719 72.835938 197.847656 72.835938 198.902344 72.835938 L 198.996094 72.835938 C 199.550781 72.835938 200.109375 72.835938 200.667969 72.835938 L 200.699219 72.835938 C 209.382812 72.898438 218.28125 73.054688 227.152344 73.300781 C 227.804688 73.332031 228.453125 73.332031 229.105469 73.363281 L 229.324219 73.363281 C 236.640625 73.582031 243.960938 73.859375 251.125 74.203125 C 253.261719 74.296875 255.402344 74.417969 257.542969 74.511719 L 257.820312 74.511719 C 259.867188 74.636719 261.882812 74.730469 263.898438 74.855469 C 266.289062 74.976562 268.675781 75.132812 271.0625 75.289062 C 273.328125 75.414062 275.746094 75.597656 278.660156 75.785156 C 283.0625 76.09375 287.125 77.769531 289.886719 80.40625 C 290.289062 80.78125 290.632812 81.183594 290.972656 81.585938 C 291.066406 81.710938 291.15625 81.835938 291.25 81.929688 C 291.3125 82.023438 291.375 82.082031 291.4375 82.175781 L 291.5 82.269531 C 291.53125 82.332031 291.5625 82.363281 291.59375 82.425781 C 291.714844 82.609375 291.839844 82.796875 291.933594 82.984375 L 297.980469 94.308594 L 304.121094 105.789062 L 306.167969 109.636719 L 310.324219 117.394531 L 323.65625 142.308594 L 323.6875 142.339844 C 323.78125 142.589844 323.90625 142.839844 324.03125 143.054688 Z M 324.03125 143.054688 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill={props.color}
        d="M 367.101562 140.109375 C 366.605469 142.527344 364.964844 144.359375 362.886719 144.855469 C 358.667969 145.847656 354.046875 146.714844 349.117188 147.367188 C 343.472656 148.082031 338.203125 148.421875 333.363281 148.453125 C 330.542969 148.484375 328.183594 146.003906 327.90625 142.746094 C 327.6875 140.199219 327.566406 137.4375 327.566406 134.523438 C 327.566406 131.078125 327.71875 127.882812 328 124.964844 C 328.246094 122.078125 330.167969 119.753906 332.648438 119.347656 C 337.207031 118.605469 342.417969 118.140625 348.15625 118.171875 C 353.488281 118.230469 358.359375 118.730469 362.636719 119.441406 C 364.839844 119.816406 366.636719 121.707031 367.164062 124.25 C 367.597656 126.484375 367.941406 129.15625 367.910156 132.164062 C 367.910156 135.203125 367.566406 137.875 367.101562 140.109375 Z M 367.101562 140.109375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill={props.color}
        d="M 16.746094 140.109375 C 17.242188 142.527344 18.886719 144.359375 20.960938 144.855469 C 25.179688 145.847656 29.800781 146.714844 34.730469 147.367188 C 40.375 148.082031 45.648438 148.421875 50.484375 148.453125 C 53.304688 148.484375 55.664062 146.003906 55.941406 142.746094 C 56.160156 140.199219 56.285156 137.4375 56.285156 134.523438 C 56.285156 131.078125 56.128906 127.882812 55.847656 124.964844 C 55.601562 122.078125 53.679688 119.753906 51.199219 119.347656 C 46.640625 118.605469 41.429688 118.140625 35.691406 118.171875 C 30.359375 118.230469 25.488281 118.730469 21.210938 119.441406 C 19.007812 119.816406 17.210938 121.707031 16.683594 124.25 C 16.25 126.484375 15.90625 129.15625 15.9375 132.164062 C 15.9375 135.203125 16.28125 137.875 16.746094 140.109375 Z M 16.746094 140.109375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Car;
