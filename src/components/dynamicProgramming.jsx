import React from 'react';
import Latex from 'react-latex';
import ProblemDescription from './problemDescription';

const DynamicProgramming = () => {
    return(
        <section id='dynamic-programming'>
            <details>
                <summary data-level='2'>Dynamic Programming</summary>
                <ProblemDescription
                    title='Target sum'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />                
                <ProblemDescription
                    title='Climbing stairs'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Minimum cost for tickets'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Coin change 2'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Word break'
                    hints={[
                        'Check each word and find in the appropriate string',
                        'Drawing out the decision tree exposes recalculated sub problems, these can be avoided with bottom up caching',
                        <Latex>If we know that the starting x characters match a word in the dictionary, we can check if we have matched the rest of the word by checking the last y characters $dp[i] = dp[i + len(w)]$</Latex>
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'linkedin', 'meta', 'microsoft', 'snapchat', 'uber']}
                    problems={[{title: 'Word Break II', link: 'https://leetcode.com/problems/word-break-ii/'}]}
                />
                <ProblemDescription
                    title='Longest palindromic substring'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Decode ways'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='House robber'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Interleaving strings'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='House robber II'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Paint house'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Longest increasing subsequence'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Longest common subsequence'
                    hints={[
                        'If two characters match we know that we have at least 1 longest common subsequence',
                        'If the characters do not match then we have too look at the previous substring matches to check what the longest common subsequence is so far'
                    ]}
                    companies={['adobe', 'amazon', 'google', 'meta', 'microsoft', 'uber']}
                    problems={[
                        {
                            title: 'Longest palindromic subsequence',
                            link: 'https://leetcode.com/problems/longest-palindromic-subsequence/'
                        },
                        {
                            title: 'Delete operation for two strings',
                            link: 'https://leetcode.com/problems/delete-operation-for-two-strings/'
                        },
                        {
                            title: 'Shortest common supersequence',
                            link: 'https://leetcode.com/problems/shortest-common-supersequence/'
                        }
                    ]}
                />
                <ProblemDescription
                    title='Maximum product subarray'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Coin change'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Maximal square'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Triangle'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Unique binary search trees'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Regular expression matching'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Jump game'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Jump game II'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Unique paths'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Perfect squares'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Edit distance'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Distinct subsequences'
                    hints={[]}
                    companies={['twitter']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Combination sum IV'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Burst balloons'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Number of ways to rearrange k sticks visible'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Maximum alternating subsequence sum'
                    hints={[]}
                    companies={['amazon', 'meta', 'google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Partition equal subset sum'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Stickers to spell word'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Counting bits'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Minimum number of days to eat n oranges'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Minimum path sum'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Pascal triangle'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='All possible full binary trees'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Min cost climbing stairs'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Stone game'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Best time to buy and sell stock with cool down'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Integer break'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Number of longest increasing subsequence'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Delete and earn'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Longest increasing path in a matrix'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
            </details>
        </section>
    )
}

export default DynamicProgramming;