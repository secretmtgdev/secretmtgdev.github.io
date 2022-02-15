import React from 'react';
import ProblemDescription from './problemDescription';
import Latex from 'react-latex';

const Backtracking = () => {
    return(
        <section id='backtracking'>
            <details>
                <summary data-level='2'>Backtracking</summary>
                <ProblemDescription
                    title='Word search'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Permutations'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Permutations II'
                    hints={[]}
                    companies={['meta', 'google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Subsets'
                    hints={[]}
                    companies={['amazon', 'apple', 'google', 'meta', 'microsoft', 'twitter']}
                    problems={[
                        {
                            title: 'Subsets II',
                            link: 'https://leetcode.com/problems/subsets-ii/'
                        },
                        {
                            title: 'Generalized abbreviation',
                            link: 'https://leetcode.com/problems/generalized-abbreviation/'
                        },
                        {
                            title: 'Letter case permutation',
                            link: 'https://leetcode.com/problems/letter-case-permutation/'
                        },
                        {
                            title: 'Find array given subset sums',
                            link: 'https://leetcode.com/problems/find-array-given-subset-sums/'
                        },
                        {
                            title: 'Count number of maximum bitwise-or subsets',
                            link: 'https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/'
                        }
                    ]}
                />
                <ProblemDescription
                    title='Palindrome partitioning'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Letter combinations of a phone number'
                    hints={
                        [
                            'Draw out the decision tree and check for a pattern',
                            'This is a backtracking problem but the digit size is very small'
                        ]
                    }
                    companies={['adobe', 'amazon', 'apple', 'google', 'meta', 'microsoft', 'twitter', 'uber']}
                    problems={[
                        {
                            title: 'Generate parentheses',
                            link: 'https://leetcode.com/problems/generate-parentheses/'
                        },
                        {
                            title: 'Combination sum',
                            link: 'https://leetcode.com/problems/combination-sum/'
                        },
                        {
                            title: 'Binary watch',
                            link: 'https://leetcode.com/problems/binary-watch/submissions/'
                        }
                    ]}
                    timeComplexity={<Latex>$O(n * 4^n)$</Latex>}
                    spaceComplexity={<Latex>$O(n)$ - only considering recursive call stack</Latex>}
                />
                <ProblemDescription
                    title='Splitting a string into descending consecutive integers'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Combination sum'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Word search II'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='N Queens'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Combination sum II'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Find unique binary string'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Combinations'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Maximum length of a concatenated string with unique characters'
                    hints={[]}
                    companies={['microsoft']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Restore IP addresses'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Partition to k equal sum subsets'
                    hints={[
                        <Latex>If $sum(arr) \% k != 0$, it is impossible to partition equally</Latex>,
                        <Latex>Each number we can make a choice, include value or not include. Doing this we can guarantee a time complexity of $O(k*2^n)$</Latex>,
                        'Sorting by descending order reduces the number of branches that we can traverse',
                        'Keep a cache to check for points in the array that have already been used',
                        <Latex>We can avoid repeated work by memoization, bringing the run time to $O(n*2^n)$</Latex>
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'linkedin', 'microsoft']}
                    problems={[
                        {
                            title: 'Matchsticks to square',
                            link: 'https://leetcode.com/problems/matchsticks-to-square/'
                        },
                        {
                            title: 'Partition equal subset sum', 
                            link: 'https://leetcode.com/problems/partition-equal-subset-sum/'
                        },
                        {
                            title: 'Maximum number of ways to partition an array',
                            link: 'https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/'
                        }
                    ]}
                />
                <ProblemDescription
                    title='Matchsticks to square'
                    hints={[
                        <Latex>If $sum(arr) \% k != 4$, it is impossible to partition equally</Latex>,
                        'For each stick we can include it in the top, right, bottom, or left positions',
                        'Sorting by descending order reduces the number of branches that we can traverse',
                    ]}
                    companies={['amazon', 'microsoft']}
                    problems={[
                        {
                            title: 'Partition to k equal sum subsets',
                            link: 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/'
                        },
                        {
                            title: 'Partition equal subset sum', 
                            link: 'https://leetcode.com/problems/partition-equal-subset-sum/'
                        },
                        {
                            title: 'Maximum number of ways to partition an array',
                            link: 'https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/'
                        }
                    ]}
                />
                <ProblemDescription
                    title='Reconstruct itinerary'
                    hints={[
                        'Create an adjacency list to generate the map',
                        'Keep the adjacency list sorted since lexical order matters in the result. This can be done by sorting the input',
                        
                    ]}
                    companies={['amazon', 'apple', 'expedia', 'google', 'microsoft', 'snapchat', 'uber']}
                    problems={[
                        {
                            title: 'Longest common subpath',
                            link: 'https://leetcode.com/problems/longest-common-subpath/'
                        },
                        {
                            title: 'Valid arrangement of pairs',
                            link: 'https://leetcode.com/problems/valid-arrangement-of-pairs/'
                        }
                    ]}
                />
                <ProblemDescription
                    title='Subsets II'
                    hints={[
                        'Draw out the decision tree, can include a value or not include it', 
                        'When excluding a value all copies of it should be skipped as well to avoid duplication',
                        'Sort the array in order to skip over duplicated values'
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'meta']}
                    problems={[
                        {
                            title: 'Subsets',
                            link: 'https://leetcode.com/problems/subsets/'
                        },
                        {
                            title: 'Find array given subset sums',
                            link: 'https://leetcode.com/problems/find-array-given-subset-sums/'
                        }
                    ]}
                    spaceComplexity={<Latex>$O(n*2^n)$</Latex>}
                    timeComplexity={<Latex>$O(n*2^n)$</Latex>}
                />
            </details>
        </section>
    )
}

export default Backtracking;