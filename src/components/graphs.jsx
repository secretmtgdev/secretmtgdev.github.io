import React from "react";
import ProblemDescription from "./problemDescription";
import Latex from "react-latex";

const Graphs = () => {
    return(
        <section id='graphs'>
            <details>
                <summary data-level='2'>Graphs</summary>
                <ProblemDescription
                    title='Course schedule'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Course schedule II'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Number of islands'
                    hints={[
                        'Draw out the problem and think of how to visually see an island',
                        'Graph searching algorithms will help'
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'linkedin', 'meta', 'microsoft', 'oracle', 'uber']}
                    problems={[
                        {
                            title: 'Surrounded regions',
                            link: 'https://leetcode.com/problems/surrounded-regions/'
                        },
                        {
                            title: 'Walls and gates',
                            link: 'https://leetcode.com/problems/walls-and-gates/'
                        },
                        {
                            title: 'Number of islands II',
                            link: 'https://leetcode.com/problems/number-of-islands-ii/'
                        },
                        {
                            title: 'Number of connected components in an undirected graph',
                            link: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/'
                        },
                        {
                            title: 'Number of distinct islands',
                            link: 'https://leetcode.com/problems/number-of-distinct-islands/'
                        },
                        {
                            title: 'Max area of island',
                            link: 'https://leetcode.com/problems/max-area-of-island/'
                        },
                        {
                            title: 'Count sub islands',
                            link: 'https://leetcode.com/problems/count-sub-islands/'
                        },
                        {
                            title: 'Find all groups of farmland',
                            link: 'https://leetcode.com/problems/find-all-groups-of-farmland/'
                        }
                    ]}
                    timeComplexity={<Latex>$O(rows * cols)$</Latex>}
                    spaceComplexity={<Latex>$O(min(rows, cols))$</Latex>}
                />
                <ProblemDescription
                    title='Clone graph'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Word ladder'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Pacific atlantic water flow'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Network delay time'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Word search'
                    hints={[]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'meta', 'microsoft', 'oracle', 'snapchat', 'uber']}
                    problems={[{title: 'Word search II', link: 'https://leetcode.com/problems/word-search-ii/'}]}
                />
                <ProblemDescription
                    title='Island perimeter'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Reorder routes to make all paths lead to city zero'
                    hints={[]}
                    companies={['amazon', 'meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Redundant connection'
                    hints={[]}
                    companies={['snapchat']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Graph valid tree'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Word search II'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Number of connected components in an undirected graph'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Alien dictionary'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Prims algorithm'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Count sub islands'
                    hints={[]}
                    companies={['amazon', 'google', 'meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Swim in rising water'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Walls and gates'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Surrounded regions'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Cheapest flights within k stops'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Max area of island'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Reconstruct itinerary'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Rotting oranges'
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
                <ProblemDescription
                    title='Snakes and ladders'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Open the lock'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
            </details>
        </section>
    )
}

export default Graphs;