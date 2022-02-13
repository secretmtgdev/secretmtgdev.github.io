import React from 'react';
import ProblemDescription from './problemDescription';
import Latex from 'react-latex';

const ArraysAndStrings = () => {
    return (
        <section id='arrays-and-strings'>
            <details>
                <summary data-level='2'>Arrays and Strings</summary>
                <ProblemDescription
                    title='Rotate image'
                    hints={[
                        'Draw out the problem and see how to rotation works',
                        'Think about rotating by the outer layer first',
                        'Rotate an element one at a time rather than taking the entire row/column and moving it all at once',
                        'Rotating elements in a clockwise fashion leads to a situation in which a temporarily variable needs to be constantly updated to avoid data corruption. We can avoid this by thinking about this backwards and needing only to set the temporary value once'
                    ]}
                    companies={['adobe', 'amazon', 'apple', 'google', 'meta', 'microsoft', 'uber']}
                    problems={[{title: 'Determine whether a matrix can be obtained by rotation', link: 'https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/'}]}
                    timeComplexity={<Latex>$O(n^2)$</Latex>}
                    spaceComplexity={<Latex>$O(1)$</Latex>}
                />
            </details>
        </section>
    )
}

export default ArraysAndStrings;