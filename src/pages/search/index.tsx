import React from "react";
import { useAtomValue } from 'jotai';
import { todoListAtom } from "../../store";
import styles from './index.module.css';

const Search: React.FC = (props: any) => {

    const todoList = useAtomValue(todoListAtom);

    return (
        <div className={styles.container}>
            <h2>todo list length: {todoList.length}</h2>
        </div>
    )
}

export default Search;