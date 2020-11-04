(function($) {
    $.extend({
        getColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let a = Math.random();
            /* 三原色 */
            return `rgba(${r},${g},${b},${a})`;
        },
        getNumberWithMinAndMax(min, max) {
            return Math.floor((Math.random() * (max - min - 1))) + min;
        },
        findMinIndex(arr) {
            var minIndex = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[minIndex].H > arr[i].H) {
                    minIndex = i;
                }
            }
            return minIndex;
        }
    })
})(jQuery)