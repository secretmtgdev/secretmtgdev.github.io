import React from "react";
import ProblemDescription from "./problemDescription";

const SlidingWindow = () => {
    return(
        <section id='sliding-window'>
            <details>
                <summary data-level='2'>Sliding Window</summary>
                <ProblemDescription
                    title='Best time to buy and sell stock'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Longest substring without repeating characters'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Minimum window substring'
                    hints={[]}
                    companies={['airbnb']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Longest repeating character replacement'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Find all anagrams in a string'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Sliding window maximum - monotonic queue'
                    hints={[]}
                    companies={['google']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Frequency of the most frequent element'
                    hints={[]}
                    companies={['meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Minimum number of flips to make binary string alternate'
                    hints={[]}
                    companies={['amazon', 'google', 'meta']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Permutation in string'
                    hints={[]}
                    companies={['microsoft']}
                    problems={[{title: '', link: ''}]}
                />
                <ProblemDescription
                    title='Minimum size subarray sum'
                    hints={[]}
                    companies={['amazon']}
                    problems={[{title: '', link: ''}]}
                />
            </details>
        </section>
    )
}

export default SlidingWindow;