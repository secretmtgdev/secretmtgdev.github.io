import React from "react";
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
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Find minimum in rotated sorted array'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Search a 2D matrix'
                    hints={[]}
                    companies={['microsoft']}
                    problems={[{title: '', link: ''}]}
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