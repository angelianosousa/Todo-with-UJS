class TasksController < ApplicationController
  before_action :set_task, except: %i[index create]

  def index
    @tasks            = Task.all
    @tasks_incomplete = @tasks.incomplete
    @task             = Task.new
  end

  def create
    @task = Task.new task_params
    @task.save
  end

  def update
    @task.update(task_params)
    flash[:success] = 'Atualizado com sucesso!!'
  end

  def destroy
    @task.destroy
  end

  private

  def set_task 
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:name, :description)
  end
end
