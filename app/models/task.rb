class Task < ApplicationRecord
  enum status: {incomplete: 0, completed: 1}
  
  validates :name, presence: true
end
