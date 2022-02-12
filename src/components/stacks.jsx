import React from "react";
import ProblemDescription from "./problemDescription";

const Stacks = () => {
    return(
        <section id='stacks'>
            <details>
                <summary data-level='2'>Stacks</summary>
                <ProblemDescription
                    title='Valid parentheses'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Simplify path'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Largest rectangle in histogram'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Generate parentheses'
                    hints={[
                        'You can not add a closing parentheses if there is no corresponding opening parentheses',
                        'If the count of open parentheses is at least 1 greater than the count of closing parentheses, then either a close or open parentheses may be added'
                    ]}
                    companies={['adobe', 'apple', 'amazon', 'meta', 'microsoft', 'uber']}
                    problems={[
                        {
                            title: 'Letter combinations of a phone number',
                            link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/'
                        },
                        {
                            title: 'Valid parentheses',
                            link: 'https://leetcode.com/problems/valid-parentheses/'
                        },
                        {
                            title: 'Check if a parentheses string can be valid',
                            link: 'https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/'
                        }
                    ]}
                />
                <ProblemDescription
                    title='Design min stack'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Daily temperatures'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Asteroid collision'
                    hints={[]}
                    companies={['lyft']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Maximum subarray min product'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Car fleet'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Implement a stack using queues'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Online stock plan'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
            </details>
        </section>
    )
}

export default Stacks;