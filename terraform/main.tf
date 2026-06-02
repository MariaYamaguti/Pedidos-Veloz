terraform {
  required_version = ">= 1.0"
}

provider "aws" {
  region = var.aws_region
}

resource "aws_eks_cluster" "pedidos_veloz" {

  name     = "pedidos-veloz"
  role_arn = "arn:aws:iam::123456789012:role/EKSRole"

  vpc_config {
    subnet_ids = ["subnet-123456"]
  }
}