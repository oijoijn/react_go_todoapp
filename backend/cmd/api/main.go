package main

import (
	"fmt"
	"net/http"
)

func main() {
	// ルートパスへのリクエストに対する処理
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, Todo App!")
	})

	fmt.Println("Server is running on port 8080...")
	
	// サーバーを起動して8080ポートで待機（ここで処理がブロックされ、終了しなくなる）
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
