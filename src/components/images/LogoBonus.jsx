import React from "react";

export default (props) => (
  <svg width={115} height={114} {...props}>
    <defs>
      <filter
        id="prefix__a"
        width="111%"
        height="111.1%"
        x="-5.5%"
        y="-2.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={3} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={1.5}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.196705638 0"
        />
      </filter>
      <path
        id="prefix__b"
        d="M37.096 42a.324.324 0 00.238-.098.324.324 0 00.098-.238V34.02c0-.093.047-.14.14-.14h1.764c.056 0 .103.037.14.112l2.828 7.728c.056.187.187.28.392.28h3.416c.205 0 .308-.084.308-.252a.312.312 0 00-.028-.14L43.2 33.572c-.037-.093-.01-.159.084-.196a4.812 4.812 0 002.212-1.96c.523-.877.784-1.913.784-3.108 0-1.157-.233-2.184-.7-3.08a5.042 5.042 0 00-1.988-2.086c-.859-.495-1.839-.742-2.94-.742H33.82a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm2.912-11.144h-2.436c-.093 0-.14-.047-.14-.14v-4.788c0-.093.047-.14.14-.14h2.436c.69 0 1.25.229 1.68.686.43.457.644 1.078.644 1.862 0 .765-.215 1.377-.644 1.834-.43.457-.99.686-1.68.686zm14.84 11.396c1.288 0 2.427-.261 3.416-.784a5.58 5.58 0 002.296-2.212c.541-.952.812-2.063.812-3.332v-7.448c0-1.25-.27-2.352-.812-3.304a5.58 5.58 0 00-2.296-2.212c-.99-.523-2.128-.784-3.416-.784-1.288 0-2.422.261-3.402.784a5.602 5.602 0 00-2.282 2.212c-.541.952-.812 2.053-.812 3.304v7.448c0 1.27.27 2.38.812 3.332a5.602 5.602 0 002.282 2.212c.98.523 2.114.784 3.402.784zm0-3.388c-.765 0-1.381-.257-1.848-.77-.467-.513-.7-1.18-.7-2.002v-7.728c0-.84.233-1.517.7-2.03.467-.513 1.083-.77 1.848-.77.784 0 1.41.257 1.876.77.467.513.7 1.19.7 2.03v7.728c0 .821-.233 1.489-.7 2.002-.467.513-1.092.77-1.876.77zm15.232 3.36c1.27 0 2.39-.247 3.36-.742a5.362 5.362 0 002.254-2.114c.532-.915.798-1.97.798-3.164v-.084a.324.324 0 00-.098-.238.324.324 0 00-.238-.098l-3.276-.14c-.224 0-.336.103-.336.308v.364c0 .765-.224 1.377-.672 1.834-.448.457-1.045.686-1.792.686-.747 0-1.344-.229-1.792-.686-.448-.457-.672-1.069-.672-1.834v-8.204c0-.765.224-1.381.672-1.848.448-.467 1.045-.7 1.792-.7.747 0 1.344.233 1.792.7.448.467.672 1.083.672 1.848v.364c0 .205.112.308.336.308l3.276-.14a.305.305 0 00.238-.112.373.373 0 00.098-.252v-.14c0-1.195-.266-2.24-.798-3.136-.532-.896-1.283-1.591-2.254-2.086-.97-.495-2.09-.742-3.36-.742s-2.39.252-3.36.756a5.426 5.426 0 00-2.254 2.142c-.532.924-.798 1.993-.798 3.206v7.784c0 1.232.266 2.315.798 3.248a5.401 5.401 0 002.254 2.156c.97.504 2.09.756 3.36.756zM82.624 42a.324.324 0 00.238-.098.324.324 0 00.098-.238v-5.6a.43.43 0 01.056-.168l1.26-1.82c.037-.056.075-.084.112-.084.037 0 .065.028.084.084l3.976 7.672c.093.168.224.252.392.252h3.584c.205 0 .308-.075.308-.224a.43.43 0 00-.056-.168l-5.488-10.584a.348.348 0 010-.196l5.18-8.036c.075-.112.089-.205.042-.28-.047-.075-.135-.112-.266-.112h-3.612a.439.439 0 00-.392.224l-5.012 7.616c-.019.056-.051.075-.098.056-.047-.019-.07-.056-.07-.112v-7.448a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.276a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zM37.012 64a.324.324 0 00.238-.098.324.324 0 00.098-.238v-7.28c0-.093.047-.14.14-.14h3.024c1.12 0 2.114-.243 2.982-.728a5.038 5.038 0 002.016-2.058c.476-.887.714-1.909.714-3.066 0-1.176-.238-2.221-.714-3.136a5.158 5.158 0 00-2.016-2.128c-.868-.504-1.862-.756-2.982-.756h-6.776a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.956c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm2.856-10.892h-2.38c-.093 0-.14-.047-.14-.14v-5.04c0-.093.047-.14.14-.14h2.38c.728 0 1.311.243 1.75.728.439.485.658 1.139.658 1.96 0 .803-.22 1.442-.658 1.918-.439.476-1.022.714-1.75.714zM51.152 64c.187 0 .308-.093.364-.28l.644-2.744c.019-.075.065-.112.14-.112h5.236c.075 0 .121.037.14.112l.644 2.744c.056.187.187.28.392.28h3.416c.205 0 .308-.084.308-.252l-.028-.112-5.04-18.956c-.056-.187-.187-.28-.392-.28h-4.06c-.205 0-.336.093-.392.28l-5.04 18.956c-.056.243.037.364.28.364h3.388zm5.6-6.188h-3.696a.186.186 0 01-.112-.042c-.037-.028-.047-.07-.028-.126l1.876-8.12c.019-.075.047-.112.084-.112.037 0 .065.037.084.112l1.932 8.12c.019.056.01.098-.028.126a.186.186 0 01-.112.042zM68.036 64a.324.324 0 00.238-.098.324.324 0 00.098-.238v-7.28c0-.093.047-.14.14-.14h3.024c1.12 0 2.114-.243 2.982-.728a5.038 5.038 0 002.016-2.058c.476-.887.714-1.909.714-3.066 0-1.176-.238-2.221-.714-3.136a5.158 5.158 0 00-2.016-2.128c-.868-.504-1.862-.756-2.982-.756H64.76a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.956c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm2.856-10.892h-2.38c-.093 0-.14-.047-.14-.14v-5.04c0-.093.047-.14.14-.14h2.38c.728 0 1.311.243 1.75.728.439.485.658 1.139.658 1.96 0 .803-.22 1.442-.658 1.918-.439.476-1.022.714-1.75.714zM90.968 64a.324.324 0 00.238-.098.324.324 0 00.098-.238v-2.716a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-7.504c-.093 0-.14-.047-.14-.14v-4.508c0-.093.047-.14.14-.14h4.676a.324.324 0 00.238-.098.324.324 0 00.098-.238v-2.716a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-4.676c-.093 0-.14-.047-.14-.14v-4.368c0-.093.047-.14.14-.14h7.504a.324.324 0 00.238-.098.324.324 0 00.098-.238v-2.716a.324.324 0 00-.098-.238.324.324 0 00-.238-.098H79.712a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h11.256zm6.328 0a.324.324 0 00.238-.098.324.324 0 00.098-.238V56.02c0-.093.047-.14.14-.14h1.764c.056 0 .103.037.14.112l2.828 7.728c.056.187.187.28.392.28h3.416c.205 0 .308-.084.308-.252a.312.312 0 00-.028-.14l-3.192-8.036c-.037-.093-.01-.159.084-.196a4.812 4.812 0 002.212-1.96c.523-.877.784-1.913.784-3.108 0-1.157-.233-2.184-.7-3.08a5.042 5.042 0 00-1.988-2.086c-.859-.495-1.839-.742-2.94-.742H94.02a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm2.912-11.144h-2.436c-.093 0-.14-.047-.14-.14v-4.788c0-.093.047-.14.14-.14h2.436c.69 0 1.25.229 1.68.686.43.457.644 1.078.644 1.862 0 .765-.215 1.377-.644 1.834-.43.457-.99.686-1.68.686zM39.364 86.224c1.904 0 3.43-.5 4.578-1.498 1.148-.999 1.722-2.347 1.722-4.046 0-.952-.205-1.764-.616-2.436a5.687 5.687 0 00-1.526-1.666c-.607-.439-1.451-.957-2.534-1.554l-.588-.336c-.952-.467-1.661-.845-2.128-1.134-.467-.29-.812-.593-1.036-.91a1.892 1.892 0 01-.336-1.12c0-.616.191-1.097.574-1.442.383-.345.91-.518 1.582-.518.803 0 1.437.224 1.904.672.467.448.7 1.008.7 1.68v.504c0 .093.033.173.098.238a.324.324 0 00.238.098h3.22a.324.324 0 00.238-.098.324.324 0 00.098-.238v-.56c0-1.12-.27-2.11-.812-2.968-.541-.859-1.297-1.526-2.268-2.002-.97-.476-2.081-.714-3.332-.714-1.195 0-2.259.22-3.192.658-.933.439-1.657 1.064-2.17 1.876-.513.812-.77 1.76-.77 2.842 0 1.083.252 2.007.756 2.772a6.714 6.714 0 001.82 1.876c.71.485 1.624 1.008 2.744 1.568.915.467 1.591.835 2.03 1.106.439.27.78.56 1.022.868.243.308.364.677.364 1.106 0 .579-.191 1.055-.574 1.428-.383.373-.938.56-1.666.56-.821 0-1.475-.22-1.96-.658a2.118 2.118 0 01-.728-1.638v-.532a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.22a.324.324 0 00-.238.098.324.324 0 00-.098.238v.728c0 1.083.266 2.04.798 2.87.532.83 1.283 1.475 2.254 1.932.97.457 2.1.686 3.388.686zm14.756 0c1.27 0 2.39-.247 3.36-.742a5.362 5.362 0 002.254-2.114c.532-.915.798-1.97.798-3.164v-.084a.324.324 0 00-.098-.238.324.324 0 00-.238-.098l-3.276-.14c-.224 0-.336.103-.336.308v.364c0 .765-.224 1.377-.672 1.834-.448.457-1.045.686-1.792.686-.747 0-1.344-.229-1.792-.686-.448-.457-.672-1.069-.672-1.834v-8.204c0-.765.224-1.381.672-1.848.448-.467 1.045-.7 1.792-.7.747 0 1.344.233 1.792.7.448.467.672 1.083.672 1.848v.364c0 .205.112.308.336.308l3.276-.14a.305.305 0 00.238-.112.373.373 0 00.098-.252v-.14c0-1.195-.266-2.24-.798-3.136-.532-.896-1.283-1.591-2.254-2.086-.97-.495-2.09-.742-3.36-.742s-2.39.252-3.36.756a5.426 5.426 0 00-2.254 2.142c-.532.924-.798 1.993-.798 3.206v7.784c0 1.232.266 2.315.798 3.248a5.401 5.401 0 002.254 2.156c.97.504 2.09.756 3.36.756zM66.664 86a.324.324 0 00.238-.098.324.324 0 00.098-.238V66.736a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.276a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm9.156.224c1.904 0 3.43-.5 4.578-1.498 1.148-.999 1.722-2.347 1.722-4.046 0-.952-.205-1.764-.616-2.436a5.687 5.687 0 00-1.526-1.666c-.607-.439-1.451-.957-2.534-1.554l-.588-.336c-.952-.467-1.661-.845-2.128-1.134-.467-.29-.812-.593-1.036-.91a1.892 1.892 0 01-.336-1.12c0-.616.191-1.097.574-1.442.383-.345.91-.518 1.582-.518.803 0 1.437.224 1.904.672.467.448.7 1.008.7 1.68v.504c0 .093.033.173.098.238a.324.324 0 00.238.098h3.22a.324.324 0 00.238-.098.324.324 0 00.098-.238v-.56c0-1.12-.27-2.11-.812-2.968-.541-.859-1.297-1.526-2.268-2.002-.97-.476-2.081-.714-3.332-.714-1.195 0-2.259.22-3.192.658-.933.439-1.657 1.064-2.17 1.876-.513.812-.77 1.76-.77 2.842 0 1.083.252 2.007.756 2.772a6.714 6.714 0 001.82 1.876c.71.485 1.624 1.008 2.744 1.568.915.467 1.591.835 2.03 1.106.439.27.78.56 1.022.868.243.308.364.677.364 1.106 0 .579-.191 1.055-.574 1.428-.383.373-.938.56-1.666.56-.821 0-1.475-.22-1.96-.658a2.118 2.118 0 01-.728-1.638v-.532a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.22a.324.324 0 00-.238.098.324.324 0 00-.098.238v.728c0 1.083.266 2.04.798 2.87.532.83 1.283 1.475 2.254 1.932.97.457 2.1.686 3.388.686zm14.56 0c1.904 0 3.43-.5 4.578-1.498 1.148-.999 1.722-2.347 1.722-4.046 0-.952-.205-1.764-.616-2.436a5.687 5.687 0 00-1.526-1.666c-.607-.439-1.451-.957-2.534-1.554l-.588-.336c-.952-.467-1.661-.845-2.128-1.134-.467-.29-.812-.593-1.036-.91a1.892 1.892 0 01-.336-1.12c0-.616.191-1.097.574-1.442.383-.345.91-.518 1.582-.518.803 0 1.437.224 1.904.672.467.448.7 1.008.7 1.68v.504c0 .093.033.173.098.238a.324.324 0 00.238.098h3.22a.324.324 0 00.238-.098.324.324 0 00.098-.238v-.56c0-1.12-.27-2.11-.812-2.968-.541-.859-1.297-1.526-2.268-2.002-.97-.476-2.081-.714-3.332-.714-1.195 0-2.259.22-3.192.658-.933.439-1.657 1.064-2.17 1.876-.513.812-.77 1.76-.77 2.842 0 1.083.252 2.007.756 2.772A6.714 6.714 0 0086.6 76.2c.71.485 1.624 1.008 2.744 1.568.915.467 1.591.835 2.03 1.106.439.27.78.56 1.022.868.243.308.364.677.364 1.106 0 .579-.191 1.055-.574 1.428-.383.373-.938.56-1.666.56-.821 0-1.475-.22-1.96-.658a2.118 2.118 0 01-.728-1.638v-.532a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.22a.324.324 0 00-.238.098.324.324 0 00-.098.238v.728c0 1.083.266 2.04.798 2.87.532.83 1.283 1.475 2.254 1.932.97.457 2.1.686 3.388.686zm14.84.028c1.288 0 2.427-.261 3.416-.784a5.58 5.58 0 002.296-2.212c.541-.952.812-2.063.812-3.332v-7.448c0-1.25-.27-2.352-.812-3.304a5.58 5.58 0 00-2.296-2.212c-.99-.523-2.128-.784-3.416-.784-1.288 0-2.422.261-3.402.784a5.602 5.602 0 00-2.282 2.212c-.541.952-.812 2.053-.812 3.304v7.448c0 1.27.27 2.38.812 3.332a5.602 5.602 0 002.282 2.212c.98.523 2.114.784 3.402.784zm0-3.388c-.765 0-1.381-.257-1.848-.77-.467-.513-.7-1.18-.7-2.002v-7.728c0-.84.233-1.517.7-2.03.467-.513 1.083-.77 1.848-.77.784 0 1.41.257 1.876.77.467.513.7 1.19.7 2.03v7.728c0 .821-.233 1.489-.7 2.002-.467.513-1.092.77-1.876.77zM117.988 86a.324.324 0 00.238-.098.324.324 0 00.098-.238V78.02c0-.093.047-.14.14-.14h1.764c.056 0 .103.037.14.112l2.828 7.728c.056.187.187.28.392.28h3.416c.205 0 .308-.084.308-.252a.312.312 0 00-.028-.14l-3.192-8.036c-.037-.093-.01-.159.084-.196a4.812 4.812 0 002.212-1.96c.523-.877.784-1.913.784-3.108 0-1.157-.233-2.184-.7-3.08a5.042 5.042 0 00-1.988-2.086c-.859-.495-1.839-.742-2.94-.742h-6.832a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm2.912-11.144h-2.436c-.093 0-.14-.047-.14-.14v-4.788c0-.093.047-.14.14-.14h2.436c.69 0 1.25.229 1.68.686.43.457.644 1.078.644 1.862 0 .765-.215 1.377-.644 1.834-.43.457-.99.686-1.68.686zm14.56 11.368c1.904 0 3.43-.5 4.578-1.498 1.148-.999 1.722-2.347 1.722-4.046 0-.952-.205-1.764-.616-2.436a5.687 5.687 0 00-1.526-1.666c-.607-.439-1.451-.957-2.534-1.554l-.588-.336c-.952-.467-1.661-.845-2.128-1.134-.467-.29-.812-.593-1.036-.91a1.892 1.892 0 01-.336-1.12c0-.616.191-1.097.574-1.442.383-.345.91-.518 1.582-.518.803 0 1.437.224 1.904.672.467.448.7 1.008.7 1.68v.504c0 .093.033.173.098.238a.324.324 0 00.238.098h3.22a.324.324 0 00.238-.098.324.324 0 00.098-.238v-.56c0-1.12-.27-2.11-.812-2.968-.541-.859-1.297-1.526-2.268-2.002-.97-.476-2.081-.714-3.332-.714-1.195 0-2.259.22-3.192.658-.933.439-1.657 1.064-2.17 1.876-.513.812-.77 1.76-.77 2.842 0 1.083.252 2.007.756 2.772a6.714 6.714 0 001.82 1.876c.71.485 1.624 1.008 2.744 1.568.915.467 1.591.835 2.03 1.106.439.27.78.56 1.022.868.243.308.364.677.364 1.106 0 .579-.191 1.055-.574 1.428-.383.373-.938.56-1.666.56-.821 0-1.475-.22-1.96-.658a2.118 2.118 0 01-.728-1.638v-.532a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.22a.324.324 0 00-.238.098.324.324 0 00-.098.238v.728c0 1.083.266 2.04.798 2.87.532.83 1.283 1.475 2.254 1.932.97.457 2.1.686 3.388.686zM45.076 108a.324.324 0 00.238-.098.324.324 0 00.098-.238v-2.716a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-7.504c-.093 0-.14-.047-.14-.14V88.736a.324.324 0 00-.098-.238.324.324 0 00-.238-.098H33.82a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h11.256zm5.992 0a.324.324 0 00.238-.098.324.324 0 00.098-.238V88.736a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.276a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm14.168 0a.324.324 0 00.238-.098.324.324 0 00.098-.238v-2.716a.324.324 0 00-.098-.238.324.324 0 00-.238-.098H58.04c-.112 0-.14-.056-.084-.168l7.504-12.348a.833.833 0 00.112-.42v-2.94a.324.324 0 00-.098-.238.324.324 0 00-.238-.098H53.924a.324.324 0 00-.238.098.324.324 0 00-.098.238v2.716c0 .093.033.173.098.238a.324.324 0 00.238.098h7.196c.112 0 .14.056.084.168L53.7 104.304a.833.833 0 00-.112.42v2.94c0 .093.033.173.098.238a.324.324 0 00.238.098h11.312zm5.488 0c.187 0 .308-.093.364-.28l.644-2.744c.019-.075.065-.112.14-.112h5.236c.075 0 .121.037.14.112l.644 2.744c.056.187.187.28.392.28H81.7c.205 0 .308-.084.308-.252l-.028-.112-5.04-18.956c-.056-.187-.187-.28-.392-.28h-4.06c-.205 0-.336.093-.392.28l-5.04 18.956c-.056.243.037.364.28.364h3.388zm5.6-6.188h-3.696a.186.186 0 01-.112-.042c-.037-.028-.047-.07-.028-.126l1.876-8.12c.019-.075.047-.112.084-.112.037 0 .065.037.084.112l1.932 8.12c.019.056.01.098-.028.126a.186.186 0 01-.112.042zM87.692 108a.324.324 0 00.238-.098.324.324 0 00.098-.238v-7.644c0-.093.047-.14.14-.14h1.764c.056 0 .103.037.14.112l2.828 7.728c.056.187.187.28.392.28h3.416c.205 0 .308-.084.308-.252a.312.312 0 00-.028-.14l-3.192-8.036c-.037-.093-.01-.159.084-.196a4.812 4.812 0 002.212-1.96c.523-.877.784-1.913.784-3.108 0-1.157-.233-2.184-.7-3.08a5.042 5.042 0 00-1.988-2.086c-.859-.495-1.839-.742-2.94-.742h-6.832a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm2.912-11.144h-2.436c-.093 0-.14-.047-.14-.14v-4.788c0-.093.047-.14.14-.14h2.436c.69 0 1.25.229 1.68.686.43.457.644 1.078.644 1.862 0 .765-.215 1.377-.644 1.834-.43.457-.99.686-1.68.686zM105.64 108c1.25 0 2.357-.233 3.318-.7.961-.467 1.703-1.13 2.226-1.988.523-.859.784-1.857.784-2.996v-8.232c0-1.139-.261-2.137-.784-2.996s-1.265-1.521-2.226-1.988c-.961-.467-2.067-.7-3.318-.7h-6.02a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h6.02zm-2.268-3.388c-.093 0-.14-.047-.14-.14V91.928c0-.093.047-.14.14-.14h2.296c.71 0 1.279.247 1.708.742.43.495.644 1.162.644 2.002v7.336c-.019.821-.243 1.48-.672 1.974-.43.495-.99.742-1.68.742l-2.296.028zm-64.008 25.612c1.904 0 3.43-.5 4.578-1.498 1.148-.999 1.722-2.347 1.722-4.046 0-.952-.205-1.764-.616-2.436a5.687 5.687 0 00-1.526-1.666c-.607-.439-1.451-.957-2.534-1.554l-.588-.336c-.952-.467-1.661-.845-2.128-1.134-.467-.29-.812-.593-1.036-.91a1.892 1.892 0 01-.336-1.12c0-.616.191-1.097.574-1.442.383-.345.91-.518 1.582-.518.803 0 1.437.224 1.904.672.467.448.7 1.008.7 1.68v.504c0 .093.033.173.098.238a.324.324 0 00.238.098h3.22a.324.324 0 00.238-.098.324.324 0 00.098-.238v-.56c0-1.12-.27-2.11-.812-2.968-.541-.859-1.297-1.526-2.268-2.002-.97-.476-2.081-.714-3.332-.714-1.195 0-2.259.22-3.192.658-.933.439-1.657 1.064-2.17 1.876-.513.812-.77 1.76-.77 2.842 0 1.083.252 2.007.756 2.772a6.714 6.714 0 001.82 1.876c.71.485 1.624 1.008 2.744 1.568.915.467 1.591.835 2.03 1.106.439.27.78.56 1.022.868.243.308.364.677.364 1.106 0 .579-.191 1.055-.574 1.428-.383.373-.938.56-1.666.56-.821 0-1.475-.22-1.96-.658a2.118 2.118 0 01-.728-1.638v-.532a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.22a.324.324 0 00-.238.098.324.324 0 00-.098.238v.728c0 1.083.266 2.04.798 2.87.532.83 1.283 1.475 2.254 1.932.97.457 2.1.686 3.388.686zM51.572 130a.324.324 0 00.238-.098.324.324 0 00.098-.238v-7.28c0-.093.047-.14.14-.14h3.024c1.12 0 2.114-.243 2.982-.728a5.038 5.038 0 002.016-2.058c.476-.887.714-1.909.714-3.066 0-1.176-.238-2.221-.714-3.136a5.158 5.158 0 00-2.016-2.128c-.868-.504-1.862-.756-2.982-.756h-6.776a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.956c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276zm2.856-10.892h-2.38c-.093 0-.14-.047-.14-.14v-5.04c0-.093.047-.14.14-.14h2.38c.728 0 1.311.243 1.75.728.439.485.658 1.139.658 1.96 0 .803-.22 1.442-.658 1.918-.439.476-1.022.714-1.75.714zm14.644 11.144c1.288 0 2.427-.261 3.416-.784a5.58 5.58 0 002.296-2.212c.541-.952.812-2.063.812-3.332v-7.448c0-1.25-.27-2.352-.812-3.304a5.58 5.58 0 00-2.296-2.212c-.99-.523-2.128-.784-3.416-.784-1.288 0-2.422.261-3.402.784a5.602 5.602 0 00-2.282 2.212c-.541.952-.812 2.053-.812 3.304v7.448c0 1.27.27 2.38.812 3.332a5.602 5.602 0 002.282 2.212c.98.523 2.114.784 3.402.784zm0-3.388c-.765 0-1.381-.257-1.848-.77-.467-.513-.7-1.18-.7-2.002v-7.728c0-.84.233-1.517.7-2.03.467-.513 1.083-.77 1.848-.77.784 0 1.41.257 1.876.77.467.513.7 1.19.7 2.03v7.728c0 .821-.233 1.489-.7 2.002-.467.513-1.092.77-1.876.77zm15.232 3.36c1.27 0 2.39-.247 3.36-.742a5.362 5.362 0 002.254-2.114c.532-.915.798-1.97.798-3.164v-.084a.324.324 0 00-.098-.238.324.324 0 00-.238-.098l-3.276-.14c-.224 0-.336.103-.336.308v.364c0 .765-.224 1.377-.672 1.834-.448.457-1.045.686-1.792.686-.747 0-1.344-.229-1.792-.686-.448-.457-.672-1.069-.672-1.834v-8.204c0-.765.224-1.381.672-1.848.448-.467 1.045-.7 1.792-.7.747 0 1.344.233 1.792.7.448.467.672 1.083.672 1.848v.364c0 .205.112.308.336.308l3.276-.14a.305.305 0 00.238-.112.373.373 0 00.098-.252v-.14c0-1.195-.266-2.24-.798-3.136-.532-.896-1.283-1.591-2.254-2.086-.97-.495-2.09-.742-3.36-.742s-2.39.252-3.36.756a5.426 5.426 0 00-2.254 2.142c-.532.924-.798 1.993-.798 3.206v7.784c0 1.232.266 2.315.798 3.248a5.401 5.401 0 002.254 2.156c.97.504 2.09.756 3.36.756zM96.848 130a.324.324 0 00.238-.098.324.324 0 00.098-.238v-5.6a.43.43 0 01.056-.168l1.26-1.82c.037-.056.075-.084.112-.084.037 0 .065.028.084.084l3.976 7.672c.093.168.224.252.392.252h3.584c.205 0 .308-.075.308-.224a.43.43 0 00-.056-.168l-5.488-10.584a.348.348 0 010-.196l5.18-8.036c.075-.112.089-.205.042-.28-.047-.075-.135-.112-.266-.112h-3.612a.439.439 0 00-.392.224l-5.012 7.616c-.019.056-.051.075-.098.056-.047-.019-.07-.056-.07-.112v-7.448a.324.324 0 00-.098-.238.324.324 0 00-.238-.098h-3.276a.324.324 0 00-.238.098.324.324 0 00-.098.238v18.928c0 .093.033.173.098.238a.324.324 0 00.238.098h3.276z"
      />
    </defs>
    <g fill="none" transform="translate(-30 -22)">
      <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
      <use fill="#FFF" xlinkHref="#prefix__b" />
    </g>
  </svg>
);
