import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useTodos } from './useTodos';

describe('useTodos Custom Hook', () => {
  it('初期状態ではTodoリストが空であること', () => {
    // Hooksは単体では動かないため、renderHookで仮想コンポーネント内にマウントする
    const { result } = renderHook(() => useTodos());
    
    // result.current が "その瞬間の返り値" を指す
    expect(result.current.todos).toEqual([]);
  });

  it('addTodoを実行するとTodoが追加されること', () => {
    const { result } = renderHook(() => useTodos());

    // act: Reactの状態更新（State Update）を伴う操作をラップする
    // これにより、Reactのレンダリングサイクルが完了するまでテストを待機させる
    act(() => {
      result.current.addTodo('Test Todo');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Test Todo');
    expect(result.current.todos[0].isCompleted).toBe(false);
  });

  it('toggleTodoを実行すると完了状態が反転すること', () => {
    const { result } = renderHook(() => useTodos());

    // 1. 追加
    act(() => {
      result.current.addTodo('Toggle Me');
    });

    const todoId = result.current.todos[0].id;

    // 2. 切り替え（False -> True）
    act(() => {
      result.current.toggleTodo(todoId);
    });
    expect(result.current.todos[0].isCompleted).toBe(true);

    // 3. 再切り替え（True -> False）
    act(() => {
      result.current.toggleTodo(todoId);
    });
    expect(result.current.todos[0].isCompleted).toBe(false);
  });

  it('deleteTodoを実行するとTodoが削除されること', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Delete Me');
    });
    
    const todoId = result.current.todos[0].id;

    act(() => {
      result.current.deleteTodo(todoId);
    });

    expect(result.current.todos).toHaveLength(0);
  });
});
