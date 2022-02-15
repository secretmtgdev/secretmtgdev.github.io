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
                    hints={[]}
                    companies={['amazon', 'google', 'meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Koko eating bananas'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='First and last position of element in sorted array'
                    hints={[]}
                    companies={['microsoft']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Median of two sorted arrays'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Search insert position'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
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