import React from 'react';
import ProblemDescription from './problemDescription';
import Latex from 'react-latex';

const TwoPointer = () => {
    return(
        <section id='two-pointer'>
            <details>
                <summary data-level='2'>Two Pointer</summary>
                <ProblemDescription
                    title='Container with most water'
                    hints={[
                        'The bottleneck occurs on the minimum value',
                        'Shift the minimum pointer as appropriate to compute next potential max area'
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'meta', 'microsoft', 'uber']}
                    problems={[{title: 'Trapping rain water', link: 'https://leetcode.com/problems/trapping-rain-water/'}]}
                    timeComplexity={<Latex>$O(n)$</Latex>}
                    spaceComplexity={<Latex>$O(1)$</Latex>}
                />
            </details>
        </section>
    )
}
 
export default TwoPointer;