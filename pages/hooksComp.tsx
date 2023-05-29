import * as React from 'react';
import TestHooks from '@/components/TestHooks';
import TestHooksRequest from '@/components/TestHooksRequest';

export default function Hooks() {
   
    return (
        <>
            <TestHooks x="value" y="y-value"/>
            <TestHooksRequest />
        </>
    );
}