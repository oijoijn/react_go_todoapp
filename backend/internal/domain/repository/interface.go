type Todo interface {
	Create(ctx context.Context, todo *Todo) error
	List(ctx context.Context) ([]Todo, error)
	Getby
}
