class Message < ApplicationRecord
  validates :text, presence: true, length: { maximum: 250 }
end
