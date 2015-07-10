require 'marky_markov'
require 'pathname'

markov = MarkyMarkov::TemporaryDictionary.new
markov.parse_file Pathname.new "train/phrases.txt"
markov.parse_file Pathname.new "train/agile-glossary.txt"
markov.parse_file Pathname.new "train/scrumalliance.txt"
puts markov.generate_n_sentences 10
puts markov.generate_n_sentences 10
puts markov.generate_n_sentences 5
markov.clear! # Clear the temporary dictionary.
