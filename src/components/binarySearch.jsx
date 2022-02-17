import React from "react";
import Latex from "react-latex";
import ProblemDescription from "./problemDescription";

const BinarySearch = () => {
    return(
        <section id='binary-search'>
            <details>
                <summary data-level='2'>Binary Search</summary>
                <ProblemDescription
                    title='Valid perfect square'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Guess number higher or lower'
                    hints={[]}
                    companies={['microsoft']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Find k closest elements'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Time based key-value store'
                    hints={[
                        <Latex>Setting and adding to the hashmap is $O(1)$</Latex>,
                        <Latex>Doing a linear scan to find the appropriate time-stamped value is trivial but non-optimal</Latex>,
                        <Latex>Time-stamped values are already sorted by time stamp per key, we can utilize binary search here to get a search of $O(log(n))$</Latex>
                    ]}
                    companies={['amazon', 'apple', 'google', 'lyft', 'microsoft']}
                    problems={[{title: 'Stock price fluctuation', link: 'https://leetcode.com/problems/stock-price-fluctuation/'}]}
                />
                <ProblemDescription
                    title='Find minimum in rotated sorted array'
                    hints={
                        [
                            'This is the equivalent of searching for the pivot point and checking to the right',
                            'You can determine which partition you are in by checking the mid point and comparing to the start value',
                            <Latex>if $arr[m] {'>'}= arr[l]$ this implies that l -{'>'} m is larger than m + 1 -{'>'} r</Latex>
                        ]}
                    companies={['adobe', 'amazon', 'meta', 'microsoft']}
                    problems={[
                        {
                            title: 'Search in rotated sorted array',
                            link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/'
                        },
                        {
                            title: 'Find minimum in rotated sorted array II',
                            link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/'
                        }
                    ]}
                    timeComplexity={<Latex>$O(log(n))$</Latex>}
                    spaceComplexity={<Latex>$O(1)$</Latex>}
                />
                <ProblemDescription
                    title='Search a 2D matrix'
                    hints={[
                        'Each row is sorted and we are guaranteed that the last column of a previous rows value is less than or equal to the first column value of the current row',
                        'Leverage a binary search to find the appropriate row to search',
                        'Once the appropriate row is found a simple binary search can be applied to see if the value exists'
                    ]}
                    companies={['amazon', 'apple', 'google', 'meta', 'microsoft', 'uber']}
                    problems={[
                        {
                            title: 'Search in a 2D matrix II',
                            link: 'https://leetcode.com/problems/search-a-2d-matrix-ii/'
                        }
                    ]}
                />
                <ProblemDescription
                    title='Maximum number of removable characters'
                    hints={[
                        'How do you check if a string is a subsequence of another one?',
                        'If you select characters up to the middle of removables and find the string p is a subsequence of s what does that indicate?'
                    ]}
                    companies={['amazon', 'google', 'meta']}
                    problems={[{title: '', link: ''}]}
                    timeComplexity={<Latex>$O(log(n))$</Latex>}
                    spaceComplexity={<Latex>$O(1)$</Latex>}
                />
                <ProblemDescription
                    title='Koko eating bananas'
                    hints={[
                        'Try brute forcing the problem',
                        'We can optimize the time by a binary search on the possible k-range'
                    ]}
                    companies={['amazon', 'apple', 'google', 'meta']}
                    problems={[
                        {
                            title: 'Minimize max distance to gas station',
                            link: 'https://leetcode.com/problems/minimize-max-distance-to-gas-station/'
                        },
                        {
                            title: 'Minimized maximum of products distributed to any store',
                            link: 'https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/'
                        }
                    ]}
                    timeComplexity={<Latex>$O(log(max(piles) * len(piles))$</Latex>}
                    spaceComplexity={<Latex>$O(1)$</Latex>}
                />
                <ProblemDescription
                    title='First and last position of element in sorted array'
                    hints={[]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'linkedin', 'meta', 'microsoft', 'uber']}
                    problems={[
                        {
                            title: 'First bad version',
                            link: 'https://leetcode.com/problems/first-bad-version/'
                        },
                        {
                            title: 'Plates between candles',
                            link: 'https://leetcode.com/problems/plates-between-candles/'
                        },
                        {
                            title: 'Find target indices after sorting array',
                            link: 'https://leetcode.com/problems/find-target-indices-after-sorting-array/'
                        }
                    ]}
                    timeComplexity={<Latex>$O(log(n))$</Latex>}
                    spaceComplexity={<Latex>$O(1)$</Latex>}
                />
                <ProblemDescription
                    title='Median of two sorted arrays'
                    hints={[
                        'Merging the arrays together makes this problem trivial, we want to avoid this',
                        'Count the total number of elements combined and take half, set a left partition on half of one of the arrays and the get total/2 - half[partition] elements from the second array',
                        'To find the partition a binary search will help',
                        'Once each array is partitioned into left and right subarrays, assert that the right most left partition of one array is less than or equal to the left most right partition value of the other array',
                        'The median value will be the minimum of the leftmost value in the right partitions of both arrays if the length of the arrays together is odd',
                        'The median value will (max(A[leftMax], B[rightMax] + min(A[rightMin], B[rightMind]) / 2'
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'oracle', 'meta', 'microsoft']}
                    problems={[{title: '', link: ''}]}
                    timeComplexity={<Latex>$O(log(min(n, m)))$</Latex>}
                    spaceComplexity={<Latex>$O(1)$</Latex>}
                />
                <ProblemDescription
                    title='Search insert position'
                    hints={[]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'microsoft']}
                    problems={[{title: 'First bad version', link: 'https://leetcode.com/problems/first-bad-version/'}]}
                />
                <ProblemDescription
                    title='Search in rotated sorted array'
                    hints={[
                        'Find the pivot index',
                        'After finding the pivot, searching left and right with binary search is trivial'
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'expedia', 'google', 'linkedin', 'meta', 'microsoft', 'uber']}
                    problems={[
                        {
                            title: 'Search in rotated sorted array II',
                            link: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/'
                        },
                        {
                            title: 'Find minimum in rotated sorted array',
                            link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/'
                        },
                        {
                            title: 'Pour water between buckets to make water levels equal',
                            link: 'https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/'
                        }
                    ]}
                />
            </details>
        </section>
    )
}

export default BinarySearch;