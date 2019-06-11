combine:
	cat data/train/*.txt | awk 'NF' > data/combined.txt
